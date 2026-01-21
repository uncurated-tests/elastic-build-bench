'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14302<T> = T extends (infer U)[]
  ? DeepReadonlyArray14302<U>
  : T extends object
  ? DeepReadonlyObject14302<T>
  : T;

interface DeepReadonlyArray14302<T> extends ReadonlyArray<DeepReadonly14302<T>> {}

type DeepReadonlyObject14302<T> = {
  readonly [P in keyof T]: DeepReadonly14302<T[P]>;
};

type UnionToIntersection14302<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14302<T> = UnionToIntersection14302<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14302<T extends unknown[], V> = [...T, V];

type TuplifyUnion14302<T, L = LastOf14302<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14302<TuplifyUnion14302<Exclude<T, L>>, L>;

type DeepPartial14302<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14302<T[P]> }
  : T;

type Paths14302<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14302<K, Paths14302<T[K], Prev14302[D]>> : never }[keyof T]
  : never;

type Prev14302 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14302<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14302 {
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

type ConfigPaths14302 = Paths14302<NestedConfig14302>;

interface HeavyProps14302 {
  config: DeepPartial14302<NestedConfig14302>;
  path?: ConfigPaths14302;
}

const HeavyComponent14302 = memo(function HeavyComponent14302({ config }: HeavyProps14302) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14302) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14302 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14302: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14302.displayName = 'HeavyComponent14302';
export default HeavyComponent14302;
