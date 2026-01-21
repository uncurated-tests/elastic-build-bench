'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4177<T> = T extends (infer U)[]
  ? DeepReadonlyArray4177<U>
  : T extends object
  ? DeepReadonlyObject4177<T>
  : T;

interface DeepReadonlyArray4177<T> extends ReadonlyArray<DeepReadonly4177<T>> {}

type DeepReadonlyObject4177<T> = {
  readonly [P in keyof T]: DeepReadonly4177<T[P]>;
};

type UnionToIntersection4177<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4177<T> = UnionToIntersection4177<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4177<T extends unknown[], V> = [...T, V];

type TuplifyUnion4177<T, L = LastOf4177<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4177<TuplifyUnion4177<Exclude<T, L>>, L>;

type DeepPartial4177<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4177<T[P]> }
  : T;

type Paths4177<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4177<K, Paths4177<T[K], Prev4177[D]>> : never }[keyof T]
  : never;

type Prev4177 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4177<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4177 {
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

type ConfigPaths4177 = Paths4177<NestedConfig4177>;

interface HeavyProps4177 {
  config: DeepPartial4177<NestedConfig4177>;
  path?: ConfigPaths4177;
}

const HeavyComponent4177 = memo(function HeavyComponent4177({ config }: HeavyProps4177) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4177) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4177 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4177: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4177.displayName = 'HeavyComponent4177';
export default HeavyComponent4177;
