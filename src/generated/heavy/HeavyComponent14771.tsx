'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14771<T> = T extends (infer U)[]
  ? DeepReadonlyArray14771<U>
  : T extends object
  ? DeepReadonlyObject14771<T>
  : T;

interface DeepReadonlyArray14771<T> extends ReadonlyArray<DeepReadonly14771<T>> {}

type DeepReadonlyObject14771<T> = {
  readonly [P in keyof T]: DeepReadonly14771<T[P]>;
};

type UnionToIntersection14771<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14771<T> = UnionToIntersection14771<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14771<T extends unknown[], V> = [...T, V];

type TuplifyUnion14771<T, L = LastOf14771<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14771<TuplifyUnion14771<Exclude<T, L>>, L>;

type DeepPartial14771<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14771<T[P]> }
  : T;

type Paths14771<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14771<K, Paths14771<T[K], Prev14771[D]>> : never }[keyof T]
  : never;

type Prev14771 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14771<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14771 {
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

type ConfigPaths14771 = Paths14771<NestedConfig14771>;

interface HeavyProps14771 {
  config: DeepPartial14771<NestedConfig14771>;
  path?: ConfigPaths14771;
}

const HeavyComponent14771 = memo(function HeavyComponent14771({ config }: HeavyProps14771) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14771) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14771 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14771: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14771.displayName = 'HeavyComponent14771';
export default HeavyComponent14771;
