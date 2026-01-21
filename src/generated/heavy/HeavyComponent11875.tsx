'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11875<T> = T extends (infer U)[]
  ? DeepReadonlyArray11875<U>
  : T extends object
  ? DeepReadonlyObject11875<T>
  : T;

interface DeepReadonlyArray11875<T> extends ReadonlyArray<DeepReadonly11875<T>> {}

type DeepReadonlyObject11875<T> = {
  readonly [P in keyof T]: DeepReadonly11875<T[P]>;
};

type UnionToIntersection11875<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11875<T> = UnionToIntersection11875<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11875<T extends unknown[], V> = [...T, V];

type TuplifyUnion11875<T, L = LastOf11875<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11875<TuplifyUnion11875<Exclude<T, L>>, L>;

type DeepPartial11875<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11875<T[P]> }
  : T;

type Paths11875<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11875<K, Paths11875<T[K], Prev11875[D]>> : never }[keyof T]
  : never;

type Prev11875 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11875<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11875 {
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

type ConfigPaths11875 = Paths11875<NestedConfig11875>;

interface HeavyProps11875 {
  config: DeepPartial11875<NestedConfig11875>;
  path?: ConfigPaths11875;
}

const HeavyComponent11875 = memo(function HeavyComponent11875({ config }: HeavyProps11875) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11875) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11875 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11875: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11875.displayName = 'HeavyComponent11875';
export default HeavyComponent11875;
