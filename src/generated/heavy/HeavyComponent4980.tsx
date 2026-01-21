'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4980<T> = T extends (infer U)[]
  ? DeepReadonlyArray4980<U>
  : T extends object
  ? DeepReadonlyObject4980<T>
  : T;

interface DeepReadonlyArray4980<T> extends ReadonlyArray<DeepReadonly4980<T>> {}

type DeepReadonlyObject4980<T> = {
  readonly [P in keyof T]: DeepReadonly4980<T[P]>;
};

type UnionToIntersection4980<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4980<T> = UnionToIntersection4980<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4980<T extends unknown[], V> = [...T, V];

type TuplifyUnion4980<T, L = LastOf4980<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4980<TuplifyUnion4980<Exclude<T, L>>, L>;

type DeepPartial4980<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4980<T[P]> }
  : T;

type Paths4980<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4980<K, Paths4980<T[K], Prev4980[D]>> : never }[keyof T]
  : never;

type Prev4980 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4980<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4980 {
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

type ConfigPaths4980 = Paths4980<NestedConfig4980>;

interface HeavyProps4980 {
  config: DeepPartial4980<NestedConfig4980>;
  path?: ConfigPaths4980;
}

const HeavyComponent4980 = memo(function HeavyComponent4980({ config }: HeavyProps4980) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4980) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4980 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4980: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4980.displayName = 'HeavyComponent4980';
export default HeavyComponent4980;
