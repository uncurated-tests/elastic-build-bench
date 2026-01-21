'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14256<T> = T extends (infer U)[]
  ? DeepReadonlyArray14256<U>
  : T extends object
  ? DeepReadonlyObject14256<T>
  : T;

interface DeepReadonlyArray14256<T> extends ReadonlyArray<DeepReadonly14256<T>> {}

type DeepReadonlyObject14256<T> = {
  readonly [P in keyof T]: DeepReadonly14256<T[P]>;
};

type UnionToIntersection14256<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14256<T> = UnionToIntersection14256<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14256<T extends unknown[], V> = [...T, V];

type TuplifyUnion14256<T, L = LastOf14256<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14256<TuplifyUnion14256<Exclude<T, L>>, L>;

type DeepPartial14256<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14256<T[P]> }
  : T;

type Paths14256<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14256<K, Paths14256<T[K], Prev14256[D]>> : never }[keyof T]
  : never;

type Prev14256 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14256<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14256 {
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

type ConfigPaths14256 = Paths14256<NestedConfig14256>;

interface HeavyProps14256 {
  config: DeepPartial14256<NestedConfig14256>;
  path?: ConfigPaths14256;
}

const HeavyComponent14256 = memo(function HeavyComponent14256({ config }: HeavyProps14256) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14256) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14256 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14256: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14256.displayName = 'HeavyComponent14256';
export default HeavyComponent14256;
