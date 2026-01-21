'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4996<T> = T extends (infer U)[]
  ? DeepReadonlyArray4996<U>
  : T extends object
  ? DeepReadonlyObject4996<T>
  : T;

interface DeepReadonlyArray4996<T> extends ReadonlyArray<DeepReadonly4996<T>> {}

type DeepReadonlyObject4996<T> = {
  readonly [P in keyof T]: DeepReadonly4996<T[P]>;
};

type UnionToIntersection4996<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4996<T> = UnionToIntersection4996<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4996<T extends unknown[], V> = [...T, V];

type TuplifyUnion4996<T, L = LastOf4996<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4996<TuplifyUnion4996<Exclude<T, L>>, L>;

type DeepPartial4996<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4996<T[P]> }
  : T;

type Paths4996<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4996<K, Paths4996<T[K], Prev4996[D]>> : never }[keyof T]
  : never;

type Prev4996 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4996<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4996 {
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

type ConfigPaths4996 = Paths4996<NestedConfig4996>;

interface HeavyProps4996 {
  config: DeepPartial4996<NestedConfig4996>;
  path?: ConfigPaths4996;
}

const HeavyComponent4996 = memo(function HeavyComponent4996({ config }: HeavyProps4996) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4996) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4996 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4996: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4996.displayName = 'HeavyComponent4996';
export default HeavyComponent4996;
