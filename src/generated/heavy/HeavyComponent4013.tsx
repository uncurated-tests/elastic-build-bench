'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4013<T> = T extends (infer U)[]
  ? DeepReadonlyArray4013<U>
  : T extends object
  ? DeepReadonlyObject4013<T>
  : T;

interface DeepReadonlyArray4013<T> extends ReadonlyArray<DeepReadonly4013<T>> {}

type DeepReadonlyObject4013<T> = {
  readonly [P in keyof T]: DeepReadonly4013<T[P]>;
};

type UnionToIntersection4013<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4013<T> = UnionToIntersection4013<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4013<T extends unknown[], V> = [...T, V];

type TuplifyUnion4013<T, L = LastOf4013<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4013<TuplifyUnion4013<Exclude<T, L>>, L>;

type DeepPartial4013<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4013<T[P]> }
  : T;

type Paths4013<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4013<K, Paths4013<T[K], Prev4013[D]>> : never }[keyof T]
  : never;

type Prev4013 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4013<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4013 {
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

type ConfigPaths4013 = Paths4013<NestedConfig4013>;

interface HeavyProps4013 {
  config: DeepPartial4013<NestedConfig4013>;
  path?: ConfigPaths4013;
}

const HeavyComponent4013 = memo(function HeavyComponent4013({ config }: HeavyProps4013) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4013) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4013 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4013: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4013.displayName = 'HeavyComponent4013';
export default HeavyComponent4013;
