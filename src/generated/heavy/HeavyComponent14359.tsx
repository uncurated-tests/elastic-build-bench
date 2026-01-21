'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14359<T> = T extends (infer U)[]
  ? DeepReadonlyArray14359<U>
  : T extends object
  ? DeepReadonlyObject14359<T>
  : T;

interface DeepReadonlyArray14359<T> extends ReadonlyArray<DeepReadonly14359<T>> {}

type DeepReadonlyObject14359<T> = {
  readonly [P in keyof T]: DeepReadonly14359<T[P]>;
};

type UnionToIntersection14359<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14359<T> = UnionToIntersection14359<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14359<T extends unknown[], V> = [...T, V];

type TuplifyUnion14359<T, L = LastOf14359<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14359<TuplifyUnion14359<Exclude<T, L>>, L>;

type DeepPartial14359<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14359<T[P]> }
  : T;

type Paths14359<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14359<K, Paths14359<T[K], Prev14359[D]>> : never }[keyof T]
  : never;

type Prev14359 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14359<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14359 {
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

type ConfigPaths14359 = Paths14359<NestedConfig14359>;

interface HeavyProps14359 {
  config: DeepPartial14359<NestedConfig14359>;
  path?: ConfigPaths14359;
}

const HeavyComponent14359 = memo(function HeavyComponent14359({ config }: HeavyProps14359) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14359) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14359 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14359: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14359.displayName = 'HeavyComponent14359';
export default HeavyComponent14359;
