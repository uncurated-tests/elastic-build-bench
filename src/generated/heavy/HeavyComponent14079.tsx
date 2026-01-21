'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14079<T> = T extends (infer U)[]
  ? DeepReadonlyArray14079<U>
  : T extends object
  ? DeepReadonlyObject14079<T>
  : T;

interface DeepReadonlyArray14079<T> extends ReadonlyArray<DeepReadonly14079<T>> {}

type DeepReadonlyObject14079<T> = {
  readonly [P in keyof T]: DeepReadonly14079<T[P]>;
};

type UnionToIntersection14079<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14079<T> = UnionToIntersection14079<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14079<T extends unknown[], V> = [...T, V];

type TuplifyUnion14079<T, L = LastOf14079<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14079<TuplifyUnion14079<Exclude<T, L>>, L>;

type DeepPartial14079<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14079<T[P]> }
  : T;

type Paths14079<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14079<K, Paths14079<T[K], Prev14079[D]>> : never }[keyof T]
  : never;

type Prev14079 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14079<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14079 {
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

type ConfigPaths14079 = Paths14079<NestedConfig14079>;

interface HeavyProps14079 {
  config: DeepPartial14079<NestedConfig14079>;
  path?: ConfigPaths14079;
}

const HeavyComponent14079 = memo(function HeavyComponent14079({ config }: HeavyProps14079) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14079) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14079 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14079: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14079.displayName = 'HeavyComponent14079';
export default HeavyComponent14079;
