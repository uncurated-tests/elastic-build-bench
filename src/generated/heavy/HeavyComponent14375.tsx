'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14375<T> = T extends (infer U)[]
  ? DeepReadonlyArray14375<U>
  : T extends object
  ? DeepReadonlyObject14375<T>
  : T;

interface DeepReadonlyArray14375<T> extends ReadonlyArray<DeepReadonly14375<T>> {}

type DeepReadonlyObject14375<T> = {
  readonly [P in keyof T]: DeepReadonly14375<T[P]>;
};

type UnionToIntersection14375<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14375<T> = UnionToIntersection14375<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14375<T extends unknown[], V> = [...T, V];

type TuplifyUnion14375<T, L = LastOf14375<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14375<TuplifyUnion14375<Exclude<T, L>>, L>;

type DeepPartial14375<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14375<T[P]> }
  : T;

type Paths14375<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14375<K, Paths14375<T[K], Prev14375[D]>> : never }[keyof T]
  : never;

type Prev14375 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14375<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14375 {
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

type ConfigPaths14375 = Paths14375<NestedConfig14375>;

interface HeavyProps14375 {
  config: DeepPartial14375<NestedConfig14375>;
  path?: ConfigPaths14375;
}

const HeavyComponent14375 = memo(function HeavyComponent14375({ config }: HeavyProps14375) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14375) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14375 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14375: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14375.displayName = 'HeavyComponent14375';
export default HeavyComponent14375;
