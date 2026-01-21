'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4720<T> = T extends (infer U)[]
  ? DeepReadonlyArray4720<U>
  : T extends object
  ? DeepReadonlyObject4720<T>
  : T;

interface DeepReadonlyArray4720<T> extends ReadonlyArray<DeepReadonly4720<T>> {}

type DeepReadonlyObject4720<T> = {
  readonly [P in keyof T]: DeepReadonly4720<T[P]>;
};

type UnionToIntersection4720<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4720<T> = UnionToIntersection4720<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4720<T extends unknown[], V> = [...T, V];

type TuplifyUnion4720<T, L = LastOf4720<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4720<TuplifyUnion4720<Exclude<T, L>>, L>;

type DeepPartial4720<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4720<T[P]> }
  : T;

type Paths4720<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4720<K, Paths4720<T[K], Prev4720[D]>> : never }[keyof T]
  : never;

type Prev4720 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4720<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4720 {
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

type ConfigPaths4720 = Paths4720<NestedConfig4720>;

interface HeavyProps4720 {
  config: DeepPartial4720<NestedConfig4720>;
  path?: ConfigPaths4720;
}

const HeavyComponent4720 = memo(function HeavyComponent4720({ config }: HeavyProps4720) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4720) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4720 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4720: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4720.displayName = 'HeavyComponent4720';
export default HeavyComponent4720;
