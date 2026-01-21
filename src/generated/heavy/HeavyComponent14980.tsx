'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14980<T> = T extends (infer U)[]
  ? DeepReadonlyArray14980<U>
  : T extends object
  ? DeepReadonlyObject14980<T>
  : T;

interface DeepReadonlyArray14980<T> extends ReadonlyArray<DeepReadonly14980<T>> {}

type DeepReadonlyObject14980<T> = {
  readonly [P in keyof T]: DeepReadonly14980<T[P]>;
};

type UnionToIntersection14980<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14980<T> = UnionToIntersection14980<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14980<T extends unknown[], V> = [...T, V];

type TuplifyUnion14980<T, L = LastOf14980<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14980<TuplifyUnion14980<Exclude<T, L>>, L>;

type DeepPartial14980<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14980<T[P]> }
  : T;

type Paths14980<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14980<K, Paths14980<T[K], Prev14980[D]>> : never }[keyof T]
  : never;

type Prev14980 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14980<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14980 {
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

type ConfigPaths14980 = Paths14980<NestedConfig14980>;

interface HeavyProps14980 {
  config: DeepPartial14980<NestedConfig14980>;
  path?: ConfigPaths14980;
}

const HeavyComponent14980 = memo(function HeavyComponent14980({ config }: HeavyProps14980) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14980) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14980 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14980: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14980.displayName = 'HeavyComponent14980';
export default HeavyComponent14980;
