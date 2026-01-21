'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4798<T> = T extends (infer U)[]
  ? DeepReadonlyArray4798<U>
  : T extends object
  ? DeepReadonlyObject4798<T>
  : T;

interface DeepReadonlyArray4798<T> extends ReadonlyArray<DeepReadonly4798<T>> {}

type DeepReadonlyObject4798<T> = {
  readonly [P in keyof T]: DeepReadonly4798<T[P]>;
};

type UnionToIntersection4798<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4798<T> = UnionToIntersection4798<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4798<T extends unknown[], V> = [...T, V];

type TuplifyUnion4798<T, L = LastOf4798<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4798<TuplifyUnion4798<Exclude<T, L>>, L>;

type DeepPartial4798<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4798<T[P]> }
  : T;

type Paths4798<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4798<K, Paths4798<T[K], Prev4798[D]>> : never }[keyof T]
  : never;

type Prev4798 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4798<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4798 {
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

type ConfigPaths4798 = Paths4798<NestedConfig4798>;

interface HeavyProps4798 {
  config: DeepPartial4798<NestedConfig4798>;
  path?: ConfigPaths4798;
}

const HeavyComponent4798 = memo(function HeavyComponent4798({ config }: HeavyProps4798) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4798) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4798 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4798: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4798.displayName = 'HeavyComponent4798';
export default HeavyComponent4798;
