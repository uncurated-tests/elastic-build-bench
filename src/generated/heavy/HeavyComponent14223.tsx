'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14223<T> = T extends (infer U)[]
  ? DeepReadonlyArray14223<U>
  : T extends object
  ? DeepReadonlyObject14223<T>
  : T;

interface DeepReadonlyArray14223<T> extends ReadonlyArray<DeepReadonly14223<T>> {}

type DeepReadonlyObject14223<T> = {
  readonly [P in keyof T]: DeepReadonly14223<T[P]>;
};

type UnionToIntersection14223<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14223<T> = UnionToIntersection14223<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14223<T extends unknown[], V> = [...T, V];

type TuplifyUnion14223<T, L = LastOf14223<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14223<TuplifyUnion14223<Exclude<T, L>>, L>;

type DeepPartial14223<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14223<T[P]> }
  : T;

type Paths14223<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14223<K, Paths14223<T[K], Prev14223[D]>> : never }[keyof T]
  : never;

type Prev14223 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14223<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14223 {
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

type ConfigPaths14223 = Paths14223<NestedConfig14223>;

interface HeavyProps14223 {
  config: DeepPartial14223<NestedConfig14223>;
  path?: ConfigPaths14223;
}

const HeavyComponent14223 = memo(function HeavyComponent14223({ config }: HeavyProps14223) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14223) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14223 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14223: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14223.displayName = 'HeavyComponent14223';
export default HeavyComponent14223;
