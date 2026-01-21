'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4302<T> = T extends (infer U)[]
  ? DeepReadonlyArray4302<U>
  : T extends object
  ? DeepReadonlyObject4302<T>
  : T;

interface DeepReadonlyArray4302<T> extends ReadonlyArray<DeepReadonly4302<T>> {}

type DeepReadonlyObject4302<T> = {
  readonly [P in keyof T]: DeepReadonly4302<T[P]>;
};

type UnionToIntersection4302<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4302<T> = UnionToIntersection4302<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4302<T extends unknown[], V> = [...T, V];

type TuplifyUnion4302<T, L = LastOf4302<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4302<TuplifyUnion4302<Exclude<T, L>>, L>;

type DeepPartial4302<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4302<T[P]> }
  : T;

type Paths4302<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4302<K, Paths4302<T[K], Prev4302[D]>> : never }[keyof T]
  : never;

type Prev4302 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4302<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4302 {
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

type ConfigPaths4302 = Paths4302<NestedConfig4302>;

interface HeavyProps4302 {
  config: DeepPartial4302<NestedConfig4302>;
  path?: ConfigPaths4302;
}

const HeavyComponent4302 = memo(function HeavyComponent4302({ config }: HeavyProps4302) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4302) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4302 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4302: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4302.displayName = 'HeavyComponent4302';
export default HeavyComponent4302;
