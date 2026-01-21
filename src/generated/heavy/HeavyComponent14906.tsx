'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14906<T> = T extends (infer U)[]
  ? DeepReadonlyArray14906<U>
  : T extends object
  ? DeepReadonlyObject14906<T>
  : T;

interface DeepReadonlyArray14906<T> extends ReadonlyArray<DeepReadonly14906<T>> {}

type DeepReadonlyObject14906<T> = {
  readonly [P in keyof T]: DeepReadonly14906<T[P]>;
};

type UnionToIntersection14906<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14906<T> = UnionToIntersection14906<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14906<T extends unknown[], V> = [...T, V];

type TuplifyUnion14906<T, L = LastOf14906<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14906<TuplifyUnion14906<Exclude<T, L>>, L>;

type DeepPartial14906<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14906<T[P]> }
  : T;

type Paths14906<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14906<K, Paths14906<T[K], Prev14906[D]>> : never }[keyof T]
  : never;

type Prev14906 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14906<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14906 {
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

type ConfigPaths14906 = Paths14906<NestedConfig14906>;

interface HeavyProps14906 {
  config: DeepPartial14906<NestedConfig14906>;
  path?: ConfigPaths14906;
}

const HeavyComponent14906 = memo(function HeavyComponent14906({ config }: HeavyProps14906) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14906) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14906 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14906: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14906.displayName = 'HeavyComponent14906';
export default HeavyComponent14906;
