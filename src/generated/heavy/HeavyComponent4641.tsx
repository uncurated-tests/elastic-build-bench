'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4641<T> = T extends (infer U)[]
  ? DeepReadonlyArray4641<U>
  : T extends object
  ? DeepReadonlyObject4641<T>
  : T;

interface DeepReadonlyArray4641<T> extends ReadonlyArray<DeepReadonly4641<T>> {}

type DeepReadonlyObject4641<T> = {
  readonly [P in keyof T]: DeepReadonly4641<T[P]>;
};

type UnionToIntersection4641<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4641<T> = UnionToIntersection4641<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4641<T extends unknown[], V> = [...T, V];

type TuplifyUnion4641<T, L = LastOf4641<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4641<TuplifyUnion4641<Exclude<T, L>>, L>;

type DeepPartial4641<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4641<T[P]> }
  : T;

type Paths4641<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4641<K, Paths4641<T[K], Prev4641[D]>> : never }[keyof T]
  : never;

type Prev4641 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4641<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4641 {
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

type ConfigPaths4641 = Paths4641<NestedConfig4641>;

interface HeavyProps4641 {
  config: DeepPartial4641<NestedConfig4641>;
  path?: ConfigPaths4641;
}

const HeavyComponent4641 = memo(function HeavyComponent4641({ config }: HeavyProps4641) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4641) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4641 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4641: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4641.displayName = 'HeavyComponent4641';
export default HeavyComponent4641;
