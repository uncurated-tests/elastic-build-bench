'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4576<T> = T extends (infer U)[]
  ? DeepReadonlyArray4576<U>
  : T extends object
  ? DeepReadonlyObject4576<T>
  : T;

interface DeepReadonlyArray4576<T> extends ReadonlyArray<DeepReadonly4576<T>> {}

type DeepReadonlyObject4576<T> = {
  readonly [P in keyof T]: DeepReadonly4576<T[P]>;
};

type UnionToIntersection4576<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4576<T> = UnionToIntersection4576<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4576<T extends unknown[], V> = [...T, V];

type TuplifyUnion4576<T, L = LastOf4576<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4576<TuplifyUnion4576<Exclude<T, L>>, L>;

type DeepPartial4576<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4576<T[P]> }
  : T;

type Paths4576<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4576<K, Paths4576<T[K], Prev4576[D]>> : never }[keyof T]
  : never;

type Prev4576 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4576<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4576 {
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

type ConfigPaths4576 = Paths4576<NestedConfig4576>;

interface HeavyProps4576 {
  config: DeepPartial4576<NestedConfig4576>;
  path?: ConfigPaths4576;
}

const HeavyComponent4576 = memo(function HeavyComponent4576({ config }: HeavyProps4576) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4576) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4576 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4576: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4576.displayName = 'HeavyComponent4576';
export default HeavyComponent4576;
