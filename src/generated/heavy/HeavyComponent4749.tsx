'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4749<T> = T extends (infer U)[]
  ? DeepReadonlyArray4749<U>
  : T extends object
  ? DeepReadonlyObject4749<T>
  : T;

interface DeepReadonlyArray4749<T> extends ReadonlyArray<DeepReadonly4749<T>> {}

type DeepReadonlyObject4749<T> = {
  readonly [P in keyof T]: DeepReadonly4749<T[P]>;
};

type UnionToIntersection4749<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4749<T> = UnionToIntersection4749<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4749<T extends unknown[], V> = [...T, V];

type TuplifyUnion4749<T, L = LastOf4749<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4749<TuplifyUnion4749<Exclude<T, L>>, L>;

type DeepPartial4749<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4749<T[P]> }
  : T;

type Paths4749<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4749<K, Paths4749<T[K], Prev4749[D]>> : never }[keyof T]
  : never;

type Prev4749 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4749<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4749 {
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

type ConfigPaths4749 = Paths4749<NestedConfig4749>;

interface HeavyProps4749 {
  config: DeepPartial4749<NestedConfig4749>;
  path?: ConfigPaths4749;
}

const HeavyComponent4749 = memo(function HeavyComponent4749({ config }: HeavyProps4749) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4749) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4749 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4749: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4749.displayName = 'HeavyComponent4749';
export default HeavyComponent4749;
