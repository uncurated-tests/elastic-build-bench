'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11974<T> = T extends (infer U)[]
  ? DeepReadonlyArray11974<U>
  : T extends object
  ? DeepReadonlyObject11974<T>
  : T;

interface DeepReadonlyArray11974<T> extends ReadonlyArray<DeepReadonly11974<T>> {}

type DeepReadonlyObject11974<T> = {
  readonly [P in keyof T]: DeepReadonly11974<T[P]>;
};

type UnionToIntersection11974<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11974<T> = UnionToIntersection11974<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11974<T extends unknown[], V> = [...T, V];

type TuplifyUnion11974<T, L = LastOf11974<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11974<TuplifyUnion11974<Exclude<T, L>>, L>;

type DeepPartial11974<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11974<T[P]> }
  : T;

type Paths11974<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11974<K, Paths11974<T[K], Prev11974[D]>> : never }[keyof T]
  : never;

type Prev11974 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11974<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11974 {
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

type ConfigPaths11974 = Paths11974<NestedConfig11974>;

interface HeavyProps11974 {
  config: DeepPartial11974<NestedConfig11974>;
  path?: ConfigPaths11974;
}

const HeavyComponent11974 = memo(function HeavyComponent11974({ config }: HeavyProps11974) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11974) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11974 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11974: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11974.displayName = 'HeavyComponent11974';
export default HeavyComponent11974;
