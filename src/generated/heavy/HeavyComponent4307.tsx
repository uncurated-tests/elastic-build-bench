'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4307<T> = T extends (infer U)[]
  ? DeepReadonlyArray4307<U>
  : T extends object
  ? DeepReadonlyObject4307<T>
  : T;

interface DeepReadonlyArray4307<T> extends ReadonlyArray<DeepReadonly4307<T>> {}

type DeepReadonlyObject4307<T> = {
  readonly [P in keyof T]: DeepReadonly4307<T[P]>;
};

type UnionToIntersection4307<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4307<T> = UnionToIntersection4307<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4307<T extends unknown[], V> = [...T, V];

type TuplifyUnion4307<T, L = LastOf4307<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4307<TuplifyUnion4307<Exclude<T, L>>, L>;

type DeepPartial4307<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4307<T[P]> }
  : T;

type Paths4307<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4307<K, Paths4307<T[K], Prev4307[D]>> : never }[keyof T]
  : never;

type Prev4307 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4307<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4307 {
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

type ConfigPaths4307 = Paths4307<NestedConfig4307>;

interface HeavyProps4307 {
  config: DeepPartial4307<NestedConfig4307>;
  path?: ConfigPaths4307;
}

const HeavyComponent4307 = memo(function HeavyComponent4307({ config }: HeavyProps4307) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4307) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4307 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4307: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4307.displayName = 'HeavyComponent4307';
export default HeavyComponent4307;
