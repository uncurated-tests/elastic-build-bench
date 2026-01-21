'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4604<T> = T extends (infer U)[]
  ? DeepReadonlyArray4604<U>
  : T extends object
  ? DeepReadonlyObject4604<T>
  : T;

interface DeepReadonlyArray4604<T> extends ReadonlyArray<DeepReadonly4604<T>> {}

type DeepReadonlyObject4604<T> = {
  readonly [P in keyof T]: DeepReadonly4604<T[P]>;
};

type UnionToIntersection4604<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4604<T> = UnionToIntersection4604<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4604<T extends unknown[], V> = [...T, V];

type TuplifyUnion4604<T, L = LastOf4604<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4604<TuplifyUnion4604<Exclude<T, L>>, L>;

type DeepPartial4604<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4604<T[P]> }
  : T;

type Paths4604<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4604<K, Paths4604<T[K], Prev4604[D]>> : never }[keyof T]
  : never;

type Prev4604 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4604<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4604 {
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

type ConfigPaths4604 = Paths4604<NestedConfig4604>;

interface HeavyProps4604 {
  config: DeepPartial4604<NestedConfig4604>;
  path?: ConfigPaths4604;
}

const HeavyComponent4604 = memo(function HeavyComponent4604({ config }: HeavyProps4604) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4604) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4604 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4604: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4604.displayName = 'HeavyComponent4604';
export default HeavyComponent4604;
