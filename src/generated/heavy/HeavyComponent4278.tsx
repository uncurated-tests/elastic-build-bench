'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4278<T> = T extends (infer U)[]
  ? DeepReadonlyArray4278<U>
  : T extends object
  ? DeepReadonlyObject4278<T>
  : T;

interface DeepReadonlyArray4278<T> extends ReadonlyArray<DeepReadonly4278<T>> {}

type DeepReadonlyObject4278<T> = {
  readonly [P in keyof T]: DeepReadonly4278<T[P]>;
};

type UnionToIntersection4278<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4278<T> = UnionToIntersection4278<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4278<T extends unknown[], V> = [...T, V];

type TuplifyUnion4278<T, L = LastOf4278<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4278<TuplifyUnion4278<Exclude<T, L>>, L>;

type DeepPartial4278<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4278<T[P]> }
  : T;

type Paths4278<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4278<K, Paths4278<T[K], Prev4278[D]>> : never }[keyof T]
  : never;

type Prev4278 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4278<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4278 {
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

type ConfigPaths4278 = Paths4278<NestedConfig4278>;

interface HeavyProps4278 {
  config: DeepPartial4278<NestedConfig4278>;
  path?: ConfigPaths4278;
}

const HeavyComponent4278 = memo(function HeavyComponent4278({ config }: HeavyProps4278) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4278) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4278 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4278: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4278.displayName = 'HeavyComponent4278';
export default HeavyComponent4278;
