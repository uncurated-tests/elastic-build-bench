'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11949<T> = T extends (infer U)[]
  ? DeepReadonlyArray11949<U>
  : T extends object
  ? DeepReadonlyObject11949<T>
  : T;

interface DeepReadonlyArray11949<T> extends ReadonlyArray<DeepReadonly11949<T>> {}

type DeepReadonlyObject11949<T> = {
  readonly [P in keyof T]: DeepReadonly11949<T[P]>;
};

type UnionToIntersection11949<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11949<T> = UnionToIntersection11949<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11949<T extends unknown[], V> = [...T, V];

type TuplifyUnion11949<T, L = LastOf11949<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11949<TuplifyUnion11949<Exclude<T, L>>, L>;

type DeepPartial11949<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11949<T[P]> }
  : T;

type Paths11949<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11949<K, Paths11949<T[K], Prev11949[D]>> : never }[keyof T]
  : never;

type Prev11949 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11949<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11949 {
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

type ConfigPaths11949 = Paths11949<NestedConfig11949>;

interface HeavyProps11949 {
  config: DeepPartial11949<NestedConfig11949>;
  path?: ConfigPaths11949;
}

const HeavyComponent11949 = memo(function HeavyComponent11949({ config }: HeavyProps11949) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11949) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11949 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11949: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11949.displayName = 'HeavyComponent11949';
export default HeavyComponent11949;
