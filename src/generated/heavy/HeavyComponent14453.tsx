'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14453<T> = T extends (infer U)[]
  ? DeepReadonlyArray14453<U>
  : T extends object
  ? DeepReadonlyObject14453<T>
  : T;

interface DeepReadonlyArray14453<T> extends ReadonlyArray<DeepReadonly14453<T>> {}

type DeepReadonlyObject14453<T> = {
  readonly [P in keyof T]: DeepReadonly14453<T[P]>;
};

type UnionToIntersection14453<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14453<T> = UnionToIntersection14453<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14453<T extends unknown[], V> = [...T, V];

type TuplifyUnion14453<T, L = LastOf14453<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14453<TuplifyUnion14453<Exclude<T, L>>, L>;

type DeepPartial14453<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14453<T[P]> }
  : T;

type Paths14453<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14453<K, Paths14453<T[K], Prev14453[D]>> : never }[keyof T]
  : never;

type Prev14453 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14453<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14453 {
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

type ConfigPaths14453 = Paths14453<NestedConfig14453>;

interface HeavyProps14453 {
  config: DeepPartial14453<NestedConfig14453>;
  path?: ConfigPaths14453;
}

const HeavyComponent14453 = memo(function HeavyComponent14453({ config }: HeavyProps14453) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14453) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14453 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14453: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14453.displayName = 'HeavyComponent14453';
export default HeavyComponent14453;
