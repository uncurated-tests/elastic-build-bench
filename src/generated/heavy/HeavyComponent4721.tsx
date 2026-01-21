'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4721<T> = T extends (infer U)[]
  ? DeepReadonlyArray4721<U>
  : T extends object
  ? DeepReadonlyObject4721<T>
  : T;

interface DeepReadonlyArray4721<T> extends ReadonlyArray<DeepReadonly4721<T>> {}

type DeepReadonlyObject4721<T> = {
  readonly [P in keyof T]: DeepReadonly4721<T[P]>;
};

type UnionToIntersection4721<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4721<T> = UnionToIntersection4721<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4721<T extends unknown[], V> = [...T, V];

type TuplifyUnion4721<T, L = LastOf4721<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4721<TuplifyUnion4721<Exclude<T, L>>, L>;

type DeepPartial4721<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4721<T[P]> }
  : T;

type Paths4721<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4721<K, Paths4721<T[K], Prev4721[D]>> : never }[keyof T]
  : never;

type Prev4721 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4721<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4721 {
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

type ConfigPaths4721 = Paths4721<NestedConfig4721>;

interface HeavyProps4721 {
  config: DeepPartial4721<NestedConfig4721>;
  path?: ConfigPaths4721;
}

const HeavyComponent4721 = memo(function HeavyComponent4721({ config }: HeavyProps4721) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4721) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4721 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4721: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4721.displayName = 'HeavyComponent4721';
export default HeavyComponent4721;
