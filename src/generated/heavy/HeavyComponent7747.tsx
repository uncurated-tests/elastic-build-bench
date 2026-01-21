'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7747<T> = T extends (infer U)[]
  ? DeepReadonlyArray7747<U>
  : T extends object
  ? DeepReadonlyObject7747<T>
  : T;

interface DeepReadonlyArray7747<T> extends ReadonlyArray<DeepReadonly7747<T>> {}

type DeepReadonlyObject7747<T> = {
  readonly [P in keyof T]: DeepReadonly7747<T[P]>;
};

type UnionToIntersection7747<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7747<T> = UnionToIntersection7747<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7747<T extends unknown[], V> = [...T, V];

type TuplifyUnion7747<T, L = LastOf7747<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7747<TuplifyUnion7747<Exclude<T, L>>, L>;

type DeepPartial7747<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7747<T[P]> }
  : T;

type Paths7747<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7747<K, Paths7747<T[K], Prev7747[D]>> : never }[keyof T]
  : never;

type Prev7747 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7747<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7747 {
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

type ConfigPaths7747 = Paths7747<NestedConfig7747>;

interface HeavyProps7747 {
  config: DeepPartial7747<NestedConfig7747>;
  path?: ConfigPaths7747;
}

const HeavyComponent7747 = memo(function HeavyComponent7747({ config }: HeavyProps7747) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7747) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7747 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7747: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7747.displayName = 'HeavyComponent7747';
export default HeavyComponent7747;
