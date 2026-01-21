'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4003<T> = T extends (infer U)[]
  ? DeepReadonlyArray4003<U>
  : T extends object
  ? DeepReadonlyObject4003<T>
  : T;

interface DeepReadonlyArray4003<T> extends ReadonlyArray<DeepReadonly4003<T>> {}

type DeepReadonlyObject4003<T> = {
  readonly [P in keyof T]: DeepReadonly4003<T[P]>;
};

type UnionToIntersection4003<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4003<T> = UnionToIntersection4003<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4003<T extends unknown[], V> = [...T, V];

type TuplifyUnion4003<T, L = LastOf4003<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4003<TuplifyUnion4003<Exclude<T, L>>, L>;

type DeepPartial4003<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4003<T[P]> }
  : T;

type Paths4003<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4003<K, Paths4003<T[K], Prev4003[D]>> : never }[keyof T]
  : never;

type Prev4003 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4003<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4003 {
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

type ConfigPaths4003 = Paths4003<NestedConfig4003>;

interface HeavyProps4003 {
  config: DeepPartial4003<NestedConfig4003>;
  path?: ConfigPaths4003;
}

const HeavyComponent4003 = memo(function HeavyComponent4003({ config }: HeavyProps4003) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4003) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4003 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4003: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4003.displayName = 'HeavyComponent4003';
export default HeavyComponent4003;
