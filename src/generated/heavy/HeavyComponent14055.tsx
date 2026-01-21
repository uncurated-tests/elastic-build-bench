'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14055<T> = T extends (infer U)[]
  ? DeepReadonlyArray14055<U>
  : T extends object
  ? DeepReadonlyObject14055<T>
  : T;

interface DeepReadonlyArray14055<T> extends ReadonlyArray<DeepReadonly14055<T>> {}

type DeepReadonlyObject14055<T> = {
  readonly [P in keyof T]: DeepReadonly14055<T[P]>;
};

type UnionToIntersection14055<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14055<T> = UnionToIntersection14055<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14055<T extends unknown[], V> = [...T, V];

type TuplifyUnion14055<T, L = LastOf14055<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14055<TuplifyUnion14055<Exclude<T, L>>, L>;

type DeepPartial14055<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14055<T[P]> }
  : T;

type Paths14055<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14055<K, Paths14055<T[K], Prev14055[D]>> : never }[keyof T]
  : never;

type Prev14055 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14055<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14055 {
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

type ConfigPaths14055 = Paths14055<NestedConfig14055>;

interface HeavyProps14055 {
  config: DeepPartial14055<NestedConfig14055>;
  path?: ConfigPaths14055;
}

const HeavyComponent14055 = memo(function HeavyComponent14055({ config }: HeavyProps14055) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14055) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14055 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14055: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14055.displayName = 'HeavyComponent14055';
export default HeavyComponent14055;
