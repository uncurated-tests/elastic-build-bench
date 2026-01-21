'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14326<T> = T extends (infer U)[]
  ? DeepReadonlyArray14326<U>
  : T extends object
  ? DeepReadonlyObject14326<T>
  : T;

interface DeepReadonlyArray14326<T> extends ReadonlyArray<DeepReadonly14326<T>> {}

type DeepReadonlyObject14326<T> = {
  readonly [P in keyof T]: DeepReadonly14326<T[P]>;
};

type UnionToIntersection14326<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14326<T> = UnionToIntersection14326<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14326<T extends unknown[], V> = [...T, V];

type TuplifyUnion14326<T, L = LastOf14326<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14326<TuplifyUnion14326<Exclude<T, L>>, L>;

type DeepPartial14326<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14326<T[P]> }
  : T;

type Paths14326<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14326<K, Paths14326<T[K], Prev14326[D]>> : never }[keyof T]
  : never;

type Prev14326 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14326<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14326 {
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

type ConfigPaths14326 = Paths14326<NestedConfig14326>;

interface HeavyProps14326 {
  config: DeepPartial14326<NestedConfig14326>;
  path?: ConfigPaths14326;
}

const HeavyComponent14326 = memo(function HeavyComponent14326({ config }: HeavyProps14326) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14326) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14326 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14326: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14326.displayName = 'HeavyComponent14326';
export default HeavyComponent14326;
