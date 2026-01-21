'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13326<T> = T extends (infer U)[]
  ? DeepReadonlyArray13326<U>
  : T extends object
  ? DeepReadonlyObject13326<T>
  : T;

interface DeepReadonlyArray13326<T> extends ReadonlyArray<DeepReadonly13326<T>> {}

type DeepReadonlyObject13326<T> = {
  readonly [P in keyof T]: DeepReadonly13326<T[P]>;
};

type UnionToIntersection13326<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13326<T> = UnionToIntersection13326<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13326<T extends unknown[], V> = [...T, V];

type TuplifyUnion13326<T, L = LastOf13326<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13326<TuplifyUnion13326<Exclude<T, L>>, L>;

type DeepPartial13326<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13326<T[P]> }
  : T;

type Paths13326<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13326<K, Paths13326<T[K], Prev13326[D]>> : never }[keyof T]
  : never;

type Prev13326 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13326<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13326 {
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

type ConfigPaths13326 = Paths13326<NestedConfig13326>;

interface HeavyProps13326 {
  config: DeepPartial13326<NestedConfig13326>;
  path?: ConfigPaths13326;
}

const HeavyComponent13326 = memo(function HeavyComponent13326({ config }: HeavyProps13326) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13326) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13326 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13326: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13326.displayName = 'HeavyComponent13326';
export default HeavyComponent13326;
