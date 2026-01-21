'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14448<T> = T extends (infer U)[]
  ? DeepReadonlyArray14448<U>
  : T extends object
  ? DeepReadonlyObject14448<T>
  : T;

interface DeepReadonlyArray14448<T> extends ReadonlyArray<DeepReadonly14448<T>> {}

type DeepReadonlyObject14448<T> = {
  readonly [P in keyof T]: DeepReadonly14448<T[P]>;
};

type UnionToIntersection14448<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14448<T> = UnionToIntersection14448<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14448<T extends unknown[], V> = [...T, V];

type TuplifyUnion14448<T, L = LastOf14448<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14448<TuplifyUnion14448<Exclude<T, L>>, L>;

type DeepPartial14448<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14448<T[P]> }
  : T;

type Paths14448<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14448<K, Paths14448<T[K], Prev14448[D]>> : never }[keyof T]
  : never;

type Prev14448 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14448<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14448 {
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

type ConfigPaths14448 = Paths14448<NestedConfig14448>;

interface HeavyProps14448 {
  config: DeepPartial14448<NestedConfig14448>;
  path?: ConfigPaths14448;
}

const HeavyComponent14448 = memo(function HeavyComponent14448({ config }: HeavyProps14448) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14448) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14448 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14448: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14448.displayName = 'HeavyComponent14448';
export default HeavyComponent14448;
