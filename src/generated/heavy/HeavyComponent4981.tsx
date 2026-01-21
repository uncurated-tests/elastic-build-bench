'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4981<T> = T extends (infer U)[]
  ? DeepReadonlyArray4981<U>
  : T extends object
  ? DeepReadonlyObject4981<T>
  : T;

interface DeepReadonlyArray4981<T> extends ReadonlyArray<DeepReadonly4981<T>> {}

type DeepReadonlyObject4981<T> = {
  readonly [P in keyof T]: DeepReadonly4981<T[P]>;
};

type UnionToIntersection4981<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4981<T> = UnionToIntersection4981<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4981<T extends unknown[], V> = [...T, V];

type TuplifyUnion4981<T, L = LastOf4981<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4981<TuplifyUnion4981<Exclude<T, L>>, L>;

type DeepPartial4981<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4981<T[P]> }
  : T;

type Paths4981<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4981<K, Paths4981<T[K], Prev4981[D]>> : never }[keyof T]
  : never;

type Prev4981 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4981<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4981 {
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

type ConfigPaths4981 = Paths4981<NestedConfig4981>;

interface HeavyProps4981 {
  config: DeepPartial4981<NestedConfig4981>;
  path?: ConfigPaths4981;
}

const HeavyComponent4981 = memo(function HeavyComponent4981({ config }: HeavyProps4981) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4981) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4981 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4981: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4981.displayName = 'HeavyComponent4981';
export default HeavyComponent4981;
