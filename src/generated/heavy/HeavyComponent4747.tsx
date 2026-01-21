'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4747<T> = T extends (infer U)[]
  ? DeepReadonlyArray4747<U>
  : T extends object
  ? DeepReadonlyObject4747<T>
  : T;

interface DeepReadonlyArray4747<T> extends ReadonlyArray<DeepReadonly4747<T>> {}

type DeepReadonlyObject4747<T> = {
  readonly [P in keyof T]: DeepReadonly4747<T[P]>;
};

type UnionToIntersection4747<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4747<T> = UnionToIntersection4747<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4747<T extends unknown[], V> = [...T, V];

type TuplifyUnion4747<T, L = LastOf4747<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4747<TuplifyUnion4747<Exclude<T, L>>, L>;

type DeepPartial4747<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4747<T[P]> }
  : T;

type Paths4747<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4747<K, Paths4747<T[K], Prev4747[D]>> : never }[keyof T]
  : never;

type Prev4747 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4747<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4747 {
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

type ConfigPaths4747 = Paths4747<NestedConfig4747>;

interface HeavyProps4747 {
  config: DeepPartial4747<NestedConfig4747>;
  path?: ConfigPaths4747;
}

const HeavyComponent4747 = memo(function HeavyComponent4747({ config }: HeavyProps4747) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4747) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4747 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4747: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4747.displayName = 'HeavyComponent4747';
export default HeavyComponent4747;
