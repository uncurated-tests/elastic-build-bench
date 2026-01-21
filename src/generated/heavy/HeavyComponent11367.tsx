'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11367<T> = T extends (infer U)[]
  ? DeepReadonlyArray11367<U>
  : T extends object
  ? DeepReadonlyObject11367<T>
  : T;

interface DeepReadonlyArray11367<T> extends ReadonlyArray<DeepReadonly11367<T>> {}

type DeepReadonlyObject11367<T> = {
  readonly [P in keyof T]: DeepReadonly11367<T[P]>;
};

type UnionToIntersection11367<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11367<T> = UnionToIntersection11367<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11367<T extends unknown[], V> = [...T, V];

type TuplifyUnion11367<T, L = LastOf11367<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11367<TuplifyUnion11367<Exclude<T, L>>, L>;

type DeepPartial11367<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11367<T[P]> }
  : T;

type Paths11367<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11367<K, Paths11367<T[K], Prev11367[D]>> : never }[keyof T]
  : never;

type Prev11367 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11367<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11367 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths11367 = Paths11367<NestedConfig11367>;

interface HeavyProps11367 {
  config: DeepPartial11367<NestedConfig11367>;
  path?: ConfigPaths11367;
}

const HeavyComponent11367 = memo(function HeavyComponent11367({ config }: HeavyProps11367) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11367) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11367 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11367: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11367.displayName = 'HeavyComponent11367';
export default HeavyComponent11367;
