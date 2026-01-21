'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14693<T> = T extends (infer U)[]
  ? DeepReadonlyArray14693<U>
  : T extends object
  ? DeepReadonlyObject14693<T>
  : T;

interface DeepReadonlyArray14693<T> extends ReadonlyArray<DeepReadonly14693<T>> {}

type DeepReadonlyObject14693<T> = {
  readonly [P in keyof T]: DeepReadonly14693<T[P]>;
};

type UnionToIntersection14693<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14693<T> = UnionToIntersection14693<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14693<T extends unknown[], V> = [...T, V];

type TuplifyUnion14693<T, L = LastOf14693<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14693<TuplifyUnion14693<Exclude<T, L>>, L>;

type DeepPartial14693<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14693<T[P]> }
  : T;

type Paths14693<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14693<K, Paths14693<T[K], Prev14693[D]>> : never }[keyof T]
  : never;

type Prev14693 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14693<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14693 {
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

type ConfigPaths14693 = Paths14693<NestedConfig14693>;

interface HeavyProps14693 {
  config: DeepPartial14693<NestedConfig14693>;
  path?: ConfigPaths14693;
}

const HeavyComponent14693 = memo(function HeavyComponent14693({ config }: HeavyProps14693) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14693) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14693 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14693: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14693.displayName = 'HeavyComponent14693';
export default HeavyComponent14693;
