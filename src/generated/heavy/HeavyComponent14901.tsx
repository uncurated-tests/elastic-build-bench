'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14901<T> = T extends (infer U)[]
  ? DeepReadonlyArray14901<U>
  : T extends object
  ? DeepReadonlyObject14901<T>
  : T;

interface DeepReadonlyArray14901<T> extends ReadonlyArray<DeepReadonly14901<T>> {}

type DeepReadonlyObject14901<T> = {
  readonly [P in keyof T]: DeepReadonly14901<T[P]>;
};

type UnionToIntersection14901<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14901<T> = UnionToIntersection14901<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14901<T extends unknown[], V> = [...T, V];

type TuplifyUnion14901<T, L = LastOf14901<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14901<TuplifyUnion14901<Exclude<T, L>>, L>;

type DeepPartial14901<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14901<T[P]> }
  : T;

type Paths14901<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14901<K, Paths14901<T[K], Prev14901[D]>> : never }[keyof T]
  : never;

type Prev14901 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14901<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14901 {
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

type ConfigPaths14901 = Paths14901<NestedConfig14901>;

interface HeavyProps14901 {
  config: DeepPartial14901<NestedConfig14901>;
  path?: ConfigPaths14901;
}

const HeavyComponent14901 = memo(function HeavyComponent14901({ config }: HeavyProps14901) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14901) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14901 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14901: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14901.displayName = 'HeavyComponent14901';
export default HeavyComponent14901;
