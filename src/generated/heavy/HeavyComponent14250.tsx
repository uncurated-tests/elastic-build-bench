'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14250<T> = T extends (infer U)[]
  ? DeepReadonlyArray14250<U>
  : T extends object
  ? DeepReadonlyObject14250<T>
  : T;

interface DeepReadonlyArray14250<T> extends ReadonlyArray<DeepReadonly14250<T>> {}

type DeepReadonlyObject14250<T> = {
  readonly [P in keyof T]: DeepReadonly14250<T[P]>;
};

type UnionToIntersection14250<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14250<T> = UnionToIntersection14250<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14250<T extends unknown[], V> = [...T, V];

type TuplifyUnion14250<T, L = LastOf14250<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14250<TuplifyUnion14250<Exclude<T, L>>, L>;

type DeepPartial14250<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14250<T[P]> }
  : T;

type Paths14250<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14250<K, Paths14250<T[K], Prev14250[D]>> : never }[keyof T]
  : never;

type Prev14250 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14250<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14250 {
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

type ConfigPaths14250 = Paths14250<NestedConfig14250>;

interface HeavyProps14250 {
  config: DeepPartial14250<NestedConfig14250>;
  path?: ConfigPaths14250;
}

const HeavyComponent14250 = memo(function HeavyComponent14250({ config }: HeavyProps14250) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14250) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14250 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14250: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14250.displayName = 'HeavyComponent14250';
export default HeavyComponent14250;
