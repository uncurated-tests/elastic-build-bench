'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14768<T> = T extends (infer U)[]
  ? DeepReadonlyArray14768<U>
  : T extends object
  ? DeepReadonlyObject14768<T>
  : T;

interface DeepReadonlyArray14768<T> extends ReadonlyArray<DeepReadonly14768<T>> {}

type DeepReadonlyObject14768<T> = {
  readonly [P in keyof T]: DeepReadonly14768<T[P]>;
};

type UnionToIntersection14768<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14768<T> = UnionToIntersection14768<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14768<T extends unknown[], V> = [...T, V];

type TuplifyUnion14768<T, L = LastOf14768<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14768<TuplifyUnion14768<Exclude<T, L>>, L>;

type DeepPartial14768<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14768<T[P]> }
  : T;

type Paths14768<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14768<K, Paths14768<T[K], Prev14768[D]>> : never }[keyof T]
  : never;

type Prev14768 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14768<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14768 {
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

type ConfigPaths14768 = Paths14768<NestedConfig14768>;

interface HeavyProps14768 {
  config: DeepPartial14768<NestedConfig14768>;
  path?: ConfigPaths14768;
}

const HeavyComponent14768 = memo(function HeavyComponent14768({ config }: HeavyProps14768) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14768) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14768 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14768: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14768.displayName = 'HeavyComponent14768';
export default HeavyComponent14768;
