'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14261<T> = T extends (infer U)[]
  ? DeepReadonlyArray14261<U>
  : T extends object
  ? DeepReadonlyObject14261<T>
  : T;

interface DeepReadonlyArray14261<T> extends ReadonlyArray<DeepReadonly14261<T>> {}

type DeepReadonlyObject14261<T> = {
  readonly [P in keyof T]: DeepReadonly14261<T[P]>;
};

type UnionToIntersection14261<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14261<T> = UnionToIntersection14261<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14261<T extends unknown[], V> = [...T, V];

type TuplifyUnion14261<T, L = LastOf14261<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14261<TuplifyUnion14261<Exclude<T, L>>, L>;

type DeepPartial14261<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14261<T[P]> }
  : T;

type Paths14261<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14261<K, Paths14261<T[K], Prev14261[D]>> : never }[keyof T]
  : never;

type Prev14261 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14261<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14261 {
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

type ConfigPaths14261 = Paths14261<NestedConfig14261>;

interface HeavyProps14261 {
  config: DeepPartial14261<NestedConfig14261>;
  path?: ConfigPaths14261;
}

const HeavyComponent14261 = memo(function HeavyComponent14261({ config }: HeavyProps14261) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14261) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14261 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14261: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14261.displayName = 'HeavyComponent14261';
export default HeavyComponent14261;
