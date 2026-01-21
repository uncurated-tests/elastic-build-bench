'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4462<T> = T extends (infer U)[]
  ? DeepReadonlyArray4462<U>
  : T extends object
  ? DeepReadonlyObject4462<T>
  : T;

interface DeepReadonlyArray4462<T> extends ReadonlyArray<DeepReadonly4462<T>> {}

type DeepReadonlyObject4462<T> = {
  readonly [P in keyof T]: DeepReadonly4462<T[P]>;
};

type UnionToIntersection4462<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4462<T> = UnionToIntersection4462<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4462<T extends unknown[], V> = [...T, V];

type TuplifyUnion4462<T, L = LastOf4462<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4462<TuplifyUnion4462<Exclude<T, L>>, L>;

type DeepPartial4462<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4462<T[P]> }
  : T;

type Paths4462<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4462<K, Paths4462<T[K], Prev4462[D]>> : never }[keyof T]
  : never;

type Prev4462 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4462<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4462 {
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

type ConfigPaths4462 = Paths4462<NestedConfig4462>;

interface HeavyProps4462 {
  config: DeepPartial4462<NestedConfig4462>;
  path?: ConfigPaths4462;
}

const HeavyComponent4462 = memo(function HeavyComponent4462({ config }: HeavyProps4462) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4462) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4462 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4462: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4462.displayName = 'HeavyComponent4462';
export default HeavyComponent4462;
