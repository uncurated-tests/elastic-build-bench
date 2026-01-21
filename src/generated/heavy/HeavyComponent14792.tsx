'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14792<T> = T extends (infer U)[]
  ? DeepReadonlyArray14792<U>
  : T extends object
  ? DeepReadonlyObject14792<T>
  : T;

interface DeepReadonlyArray14792<T> extends ReadonlyArray<DeepReadonly14792<T>> {}

type DeepReadonlyObject14792<T> = {
  readonly [P in keyof T]: DeepReadonly14792<T[P]>;
};

type UnionToIntersection14792<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14792<T> = UnionToIntersection14792<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14792<T extends unknown[], V> = [...T, V];

type TuplifyUnion14792<T, L = LastOf14792<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14792<TuplifyUnion14792<Exclude<T, L>>, L>;

type DeepPartial14792<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14792<T[P]> }
  : T;

type Paths14792<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14792<K, Paths14792<T[K], Prev14792[D]>> : never }[keyof T]
  : never;

type Prev14792 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14792<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14792 {
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

type ConfigPaths14792 = Paths14792<NestedConfig14792>;

interface HeavyProps14792 {
  config: DeepPartial14792<NestedConfig14792>;
  path?: ConfigPaths14792;
}

const HeavyComponent14792 = memo(function HeavyComponent14792({ config }: HeavyProps14792) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14792) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14792 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14792: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14792.displayName = 'HeavyComponent14792';
export default HeavyComponent14792;
