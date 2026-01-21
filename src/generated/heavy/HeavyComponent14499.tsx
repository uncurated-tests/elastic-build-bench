'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14499<T> = T extends (infer U)[]
  ? DeepReadonlyArray14499<U>
  : T extends object
  ? DeepReadonlyObject14499<T>
  : T;

interface DeepReadonlyArray14499<T> extends ReadonlyArray<DeepReadonly14499<T>> {}

type DeepReadonlyObject14499<T> = {
  readonly [P in keyof T]: DeepReadonly14499<T[P]>;
};

type UnionToIntersection14499<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14499<T> = UnionToIntersection14499<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14499<T extends unknown[], V> = [...T, V];

type TuplifyUnion14499<T, L = LastOf14499<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14499<TuplifyUnion14499<Exclude<T, L>>, L>;

type DeepPartial14499<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14499<T[P]> }
  : T;

type Paths14499<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14499<K, Paths14499<T[K], Prev14499[D]>> : never }[keyof T]
  : never;

type Prev14499 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14499<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14499 {
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

type ConfigPaths14499 = Paths14499<NestedConfig14499>;

interface HeavyProps14499 {
  config: DeepPartial14499<NestedConfig14499>;
  path?: ConfigPaths14499;
}

const HeavyComponent14499 = memo(function HeavyComponent14499({ config }: HeavyProps14499) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14499) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14499 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14499: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14499.displayName = 'HeavyComponent14499';
export default HeavyComponent14499;
