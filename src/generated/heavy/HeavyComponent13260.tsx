'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13260<T> = T extends (infer U)[]
  ? DeepReadonlyArray13260<U>
  : T extends object
  ? DeepReadonlyObject13260<T>
  : T;

interface DeepReadonlyArray13260<T> extends ReadonlyArray<DeepReadonly13260<T>> {}

type DeepReadonlyObject13260<T> = {
  readonly [P in keyof T]: DeepReadonly13260<T[P]>;
};

type UnionToIntersection13260<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13260<T> = UnionToIntersection13260<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13260<T extends unknown[], V> = [...T, V];

type TuplifyUnion13260<T, L = LastOf13260<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13260<TuplifyUnion13260<Exclude<T, L>>, L>;

type DeepPartial13260<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13260<T[P]> }
  : T;

type Paths13260<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13260<K, Paths13260<T[K], Prev13260[D]>> : never }[keyof T]
  : never;

type Prev13260 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13260<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13260 {
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

type ConfigPaths13260 = Paths13260<NestedConfig13260>;

interface HeavyProps13260 {
  config: DeepPartial13260<NestedConfig13260>;
  path?: ConfigPaths13260;
}

const HeavyComponent13260 = memo(function HeavyComponent13260({ config }: HeavyProps13260) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13260) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13260 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13260: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13260.displayName = 'HeavyComponent13260';
export default HeavyComponent13260;
