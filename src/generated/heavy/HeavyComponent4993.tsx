'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4993<T> = T extends (infer U)[]
  ? DeepReadonlyArray4993<U>
  : T extends object
  ? DeepReadonlyObject4993<T>
  : T;

interface DeepReadonlyArray4993<T> extends ReadonlyArray<DeepReadonly4993<T>> {}

type DeepReadonlyObject4993<T> = {
  readonly [P in keyof T]: DeepReadonly4993<T[P]>;
};

type UnionToIntersection4993<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4993<T> = UnionToIntersection4993<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4993<T extends unknown[], V> = [...T, V];

type TuplifyUnion4993<T, L = LastOf4993<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4993<TuplifyUnion4993<Exclude<T, L>>, L>;

type DeepPartial4993<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4993<T[P]> }
  : T;

type Paths4993<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4993<K, Paths4993<T[K], Prev4993[D]>> : never }[keyof T]
  : never;

type Prev4993 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4993<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4993 {
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

type ConfigPaths4993 = Paths4993<NestedConfig4993>;

interface HeavyProps4993 {
  config: DeepPartial4993<NestedConfig4993>;
  path?: ConfigPaths4993;
}

const HeavyComponent4993 = memo(function HeavyComponent4993({ config }: HeavyProps4993) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4993) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4993 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4993: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4993.displayName = 'HeavyComponent4993';
export default HeavyComponent4993;
