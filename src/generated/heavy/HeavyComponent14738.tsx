'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14738<T> = T extends (infer U)[]
  ? DeepReadonlyArray14738<U>
  : T extends object
  ? DeepReadonlyObject14738<T>
  : T;

interface DeepReadonlyArray14738<T> extends ReadonlyArray<DeepReadonly14738<T>> {}

type DeepReadonlyObject14738<T> = {
  readonly [P in keyof T]: DeepReadonly14738<T[P]>;
};

type UnionToIntersection14738<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14738<T> = UnionToIntersection14738<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14738<T extends unknown[], V> = [...T, V];

type TuplifyUnion14738<T, L = LastOf14738<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14738<TuplifyUnion14738<Exclude<T, L>>, L>;

type DeepPartial14738<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14738<T[P]> }
  : T;

type Paths14738<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14738<K, Paths14738<T[K], Prev14738[D]>> : never }[keyof T]
  : never;

type Prev14738 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14738<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14738 {
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

type ConfigPaths14738 = Paths14738<NestedConfig14738>;

interface HeavyProps14738 {
  config: DeepPartial14738<NestedConfig14738>;
  path?: ConfigPaths14738;
}

const HeavyComponent14738 = memo(function HeavyComponent14738({ config }: HeavyProps14738) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14738) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14738 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14738: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14738.displayName = 'HeavyComponent14738';
export default HeavyComponent14738;
