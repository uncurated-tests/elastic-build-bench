'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14703<T> = T extends (infer U)[]
  ? DeepReadonlyArray14703<U>
  : T extends object
  ? DeepReadonlyObject14703<T>
  : T;

interface DeepReadonlyArray14703<T> extends ReadonlyArray<DeepReadonly14703<T>> {}

type DeepReadonlyObject14703<T> = {
  readonly [P in keyof T]: DeepReadonly14703<T[P]>;
};

type UnionToIntersection14703<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14703<T> = UnionToIntersection14703<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14703<T extends unknown[], V> = [...T, V];

type TuplifyUnion14703<T, L = LastOf14703<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14703<TuplifyUnion14703<Exclude<T, L>>, L>;

type DeepPartial14703<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14703<T[P]> }
  : T;

type Paths14703<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14703<K, Paths14703<T[K], Prev14703[D]>> : never }[keyof T]
  : never;

type Prev14703 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14703<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14703 {
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

type ConfigPaths14703 = Paths14703<NestedConfig14703>;

interface HeavyProps14703 {
  config: DeepPartial14703<NestedConfig14703>;
  path?: ConfigPaths14703;
}

const HeavyComponent14703 = memo(function HeavyComponent14703({ config }: HeavyProps14703) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14703) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14703 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14703: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14703.displayName = 'HeavyComponent14703';
export default HeavyComponent14703;
