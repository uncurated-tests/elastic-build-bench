'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14705<T> = T extends (infer U)[]
  ? DeepReadonlyArray14705<U>
  : T extends object
  ? DeepReadonlyObject14705<T>
  : T;

interface DeepReadonlyArray14705<T> extends ReadonlyArray<DeepReadonly14705<T>> {}

type DeepReadonlyObject14705<T> = {
  readonly [P in keyof T]: DeepReadonly14705<T[P]>;
};

type UnionToIntersection14705<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14705<T> = UnionToIntersection14705<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14705<T extends unknown[], V> = [...T, V];

type TuplifyUnion14705<T, L = LastOf14705<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14705<TuplifyUnion14705<Exclude<T, L>>, L>;

type DeepPartial14705<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14705<T[P]> }
  : T;

type Paths14705<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14705<K, Paths14705<T[K], Prev14705[D]>> : never }[keyof T]
  : never;

type Prev14705 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14705<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14705 {
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

type ConfigPaths14705 = Paths14705<NestedConfig14705>;

interface HeavyProps14705 {
  config: DeepPartial14705<NestedConfig14705>;
  path?: ConfigPaths14705;
}

const HeavyComponent14705 = memo(function HeavyComponent14705({ config }: HeavyProps14705) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14705) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14705 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14705: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14705.displayName = 'HeavyComponent14705';
export default HeavyComponent14705;
