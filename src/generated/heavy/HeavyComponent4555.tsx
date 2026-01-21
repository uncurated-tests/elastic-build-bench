'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4555<T> = T extends (infer U)[]
  ? DeepReadonlyArray4555<U>
  : T extends object
  ? DeepReadonlyObject4555<T>
  : T;

interface DeepReadonlyArray4555<T> extends ReadonlyArray<DeepReadonly4555<T>> {}

type DeepReadonlyObject4555<T> = {
  readonly [P in keyof T]: DeepReadonly4555<T[P]>;
};

type UnionToIntersection4555<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4555<T> = UnionToIntersection4555<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4555<T extends unknown[], V> = [...T, V];

type TuplifyUnion4555<T, L = LastOf4555<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4555<TuplifyUnion4555<Exclude<T, L>>, L>;

type DeepPartial4555<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4555<T[P]> }
  : T;

type Paths4555<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4555<K, Paths4555<T[K], Prev4555[D]>> : never }[keyof T]
  : never;

type Prev4555 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4555<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4555 {
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

type ConfigPaths4555 = Paths4555<NestedConfig4555>;

interface HeavyProps4555 {
  config: DeepPartial4555<NestedConfig4555>;
  path?: ConfigPaths4555;
}

const HeavyComponent4555 = memo(function HeavyComponent4555({ config }: HeavyProps4555) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4555) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4555 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4555: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4555.displayName = 'HeavyComponent4555';
export default HeavyComponent4555;
