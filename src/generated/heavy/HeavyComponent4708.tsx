'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4708<T> = T extends (infer U)[]
  ? DeepReadonlyArray4708<U>
  : T extends object
  ? DeepReadonlyObject4708<T>
  : T;

interface DeepReadonlyArray4708<T> extends ReadonlyArray<DeepReadonly4708<T>> {}

type DeepReadonlyObject4708<T> = {
  readonly [P in keyof T]: DeepReadonly4708<T[P]>;
};

type UnionToIntersection4708<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4708<T> = UnionToIntersection4708<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4708<T extends unknown[], V> = [...T, V];

type TuplifyUnion4708<T, L = LastOf4708<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4708<TuplifyUnion4708<Exclude<T, L>>, L>;

type DeepPartial4708<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4708<T[P]> }
  : T;

type Paths4708<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4708<K, Paths4708<T[K], Prev4708[D]>> : never }[keyof T]
  : never;

type Prev4708 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4708<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4708 {
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

type ConfigPaths4708 = Paths4708<NestedConfig4708>;

interface HeavyProps4708 {
  config: DeepPartial4708<NestedConfig4708>;
  path?: ConfigPaths4708;
}

const HeavyComponent4708 = memo(function HeavyComponent4708({ config }: HeavyProps4708) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4708) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4708 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4708: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4708.displayName = 'HeavyComponent4708';
export default HeavyComponent4708;
