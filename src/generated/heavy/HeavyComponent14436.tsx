'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14436<T> = T extends (infer U)[]
  ? DeepReadonlyArray14436<U>
  : T extends object
  ? DeepReadonlyObject14436<T>
  : T;

interface DeepReadonlyArray14436<T> extends ReadonlyArray<DeepReadonly14436<T>> {}

type DeepReadonlyObject14436<T> = {
  readonly [P in keyof T]: DeepReadonly14436<T[P]>;
};

type UnionToIntersection14436<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14436<T> = UnionToIntersection14436<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14436<T extends unknown[], V> = [...T, V];

type TuplifyUnion14436<T, L = LastOf14436<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14436<TuplifyUnion14436<Exclude<T, L>>, L>;

type DeepPartial14436<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14436<T[P]> }
  : T;

type Paths14436<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14436<K, Paths14436<T[K], Prev14436[D]>> : never }[keyof T]
  : never;

type Prev14436 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14436<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14436 {
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

type ConfigPaths14436 = Paths14436<NestedConfig14436>;

interface HeavyProps14436 {
  config: DeepPartial14436<NestedConfig14436>;
  path?: ConfigPaths14436;
}

const HeavyComponent14436 = memo(function HeavyComponent14436({ config }: HeavyProps14436) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14436) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14436 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14436: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14436.displayName = 'HeavyComponent14436';
export default HeavyComponent14436;
