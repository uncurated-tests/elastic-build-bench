'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4703<T> = T extends (infer U)[]
  ? DeepReadonlyArray4703<U>
  : T extends object
  ? DeepReadonlyObject4703<T>
  : T;

interface DeepReadonlyArray4703<T> extends ReadonlyArray<DeepReadonly4703<T>> {}

type DeepReadonlyObject4703<T> = {
  readonly [P in keyof T]: DeepReadonly4703<T[P]>;
};

type UnionToIntersection4703<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4703<T> = UnionToIntersection4703<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4703<T extends unknown[], V> = [...T, V];

type TuplifyUnion4703<T, L = LastOf4703<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4703<TuplifyUnion4703<Exclude<T, L>>, L>;

type DeepPartial4703<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4703<T[P]> }
  : T;

type Paths4703<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4703<K, Paths4703<T[K], Prev4703[D]>> : never }[keyof T]
  : never;

type Prev4703 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4703<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4703 {
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

type ConfigPaths4703 = Paths4703<NestedConfig4703>;

interface HeavyProps4703 {
  config: DeepPartial4703<NestedConfig4703>;
  path?: ConfigPaths4703;
}

const HeavyComponent4703 = memo(function HeavyComponent4703({ config }: HeavyProps4703) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4703) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4703 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4703: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4703.displayName = 'HeavyComponent4703';
export default HeavyComponent4703;
