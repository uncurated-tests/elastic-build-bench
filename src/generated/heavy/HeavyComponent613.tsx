'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly613<T> = T extends (infer U)[]
  ? DeepReadonlyArray613<U>
  : T extends object
  ? DeepReadonlyObject613<T>
  : T;

interface DeepReadonlyArray613<T> extends ReadonlyArray<DeepReadonly613<T>> {}

type DeepReadonlyObject613<T> = {
  readonly [P in keyof T]: DeepReadonly613<T[P]>;
};

type UnionToIntersection613<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf613<T> = UnionToIntersection613<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push613<T extends unknown[], V> = [...T, V];

type TuplifyUnion613<T, L = LastOf613<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push613<TuplifyUnion613<Exclude<T, L>>, L>;

type DeepPartial613<T> = T extends object
  ? { [P in keyof T]?: DeepPartial613<T[P]> }
  : T;

type Paths613<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join613<K, Paths613<T[K], Prev613[D]>> : never }[keyof T]
  : never;

type Prev613 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join613<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig613 {
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

type ConfigPaths613 = Paths613<NestedConfig613>;

interface HeavyProps613 {
  config: DeepPartial613<NestedConfig613>;
  path?: ConfigPaths613;
}

const HeavyComponent613 = memo(function HeavyComponent613({ config }: HeavyProps613) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 613) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-613 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H613: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent613.displayName = 'HeavyComponent613';
export default HeavyComponent613;
